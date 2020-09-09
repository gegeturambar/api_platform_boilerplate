<?php

namespace App\Repository;

use App\Entity\OffreInfos;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method OffreInfos|null find($id, $lockMode = null, $lockVersion = null)
 * @method OffreInfos|null findOneBy(array $criteria, array $orderBy = null)
 * @method OffreInfos[]    findAll()
 * @method OffreInfos[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OffreInfosRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, OffreInfos::class);
    }

    // /**
    //  * @return OffreInfos[] Returns an array of OffreInfos objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('o.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?OffreInfos
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
