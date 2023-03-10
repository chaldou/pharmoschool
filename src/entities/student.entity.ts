import {
    Collection,
    Entity,
    Enum,
    IdentifiedReference,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryKey,
    Property,
  } from '@mikro-orm/core';
import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CategorieEleve } from './categorie-eleve.entity';
import { Inscription } from './inscription.entity';
import { Localisation } from './localisation.entity';
import { Parent } from './parent.entity';
import { Salle } from './salle.entity';
import { TrancheStudent } from './tranche-student.entity';
import { User } from './user.entity';

@Entity()
@ObjectType()
export class Student {
  @Field(() => ID)
  @PrimaryKey()
  id!: string;

  @Field({ nullable: true })
  @Property({ unique:true })
  matricule!: string;

  @Field({ nullable: true })
  @Property({ nullable: true })
  age!: number;

  @Field(() => Date, { nullable: true })
  @Property({ nullable: true })
  bornDate!: Date | null;

  @Field({ nullable: true })
  @Property({ nullable: true })
  fathertName!: string;

  @Field({ nullable: true })
  @Property({ nullable: true })
  fatherWork!: string;

  @Field({ nullable: true })
  @Property({ nullable: true })
  motherName!: string;

  @Field({ nullable: true })
  @Property({ nullable: true })
  motherWork!: string;

  @Field({ nullable: true })
  @Property({ nullable: true})
  tuteur!: string;
  
  @Field({ defaultValue: false })
  @Property({ default:false })
  old!: boolean;

  @Field({ defaultValue: false })
  @Property({ default:false })
  exclut!: boolean;

  @Field({ nullable: true })
  @Property({ nullable: true })
  lastSchool!: string;
  
  @Property({ onCreate: () => new Date() })
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  // Relations
  @OneToOne(() => User, (user) => user.student, {
    owner: true,
    unique: true,
    onDelete: 'CASCADE',
  })
  user!: IdentifiedReference<User>;

  @ManyToOne(() => Salle ,{
    nullable:true,
    onDelete:'CASCADE'
  })
  salle!:IdentifiedReference<Salle>|null

  @ManyToOne(() => CategorieEleve ,{
    nullable:false,
    onDelete:'SET NULL'
  })
  categorie!:IdentifiedReference<CategorieEleve>|null

  @ManyToOne(() => Parent ,{
    nullable:false,
    onDelete:'CASCADE'
  })
  parent!:IdentifiedReference<Parent>|null

  @ManyToOne(() => Localisation ,{
    nullable:true,
    onDelete:'CASCADE'
  })
  localisation!:IdentifiedReference<Localisation>|null

  @OneToMany(()=>Inscription, (inscription) => inscription.student)
  inscription = new Collection<Inscription>(this)

  @OneToMany(()=>TrancheStudent, (tranche) => tranche.student)
  trancheStudent = new Collection<TrancheStudent>(this)
}