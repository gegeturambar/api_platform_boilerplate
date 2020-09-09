<?php

namespace App\Repository;

use App\Entity\Commanditaire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Commanditaire|null find($id, $lockMode = null, $lockVersion = null)
 * @method Commanditaire|null findOneBy(array $criteria, array $orderBy = null)
 * @method Commanditaire[]    findAll()
 * @method Commanditaire[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CommanditaireRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Commanditaire::class);
    }

    // /**
    //  * @return Commanditaire[] Returns an array of Commanditaire objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Commanditaire
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
