<?php

namespace App\Repository;

use App\Entity\Cds;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Cds|null find($id, $lockMode = null, $lockVersion = null)
 * @method Cds|null findOneBy(array $criteria, array $orderBy = null)
 * @method Cds[]    findAll()
 * @method Cds[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CdsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Cds::class);
    }

    // /**
    //  * @return Cds[] Returns an array of Cds objects
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
    public function findOneBySomeField($value): ?Cds
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
