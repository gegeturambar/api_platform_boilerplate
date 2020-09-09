<?php

namespace App\Repository;

use App\Entity\Infra;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Infra|null find($id, $lockMode = null, $lockVersion = null)
 * @method Infra|null findOneBy(array $criteria, array $orderBy = null)
 * @method Infra[]    findAll()
 * @method Infra[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class InfraRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Infra::class);
    }

    // /**
    //  * @return Infra[] Returns an array of Infra objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('i.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Infra
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
