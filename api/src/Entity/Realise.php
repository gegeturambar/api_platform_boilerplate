<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\RealiseRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=RealiseRepository::class)
 */
class Realise
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $mois;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateFin;

    /**
     * @ORM\Column(type="float")
     */
    private $nbUo;

    /**
     * @ORM\ManyToOne(targetEntity=Infra::class, inversedBy="realises")
     * @ORM\JoinColumn(nullable=false)
     */
    private $infrastructure;

    /**
     * @ORM\ManyToOne(targetEntity=Offre::class, inversedBy="realises")
     * @ORM\JoinColumn(nullable=false)
     */
    private $offre;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMois(): ?int
    {
        return $this->mois;
    }

    public function setMois(int $mois): self
    {
        $this->mois = $mois;

        return $this;
    }

    public function getDateFin(): ?\DateTimeInterface
    {
        return $this->dateFin;
    }

    public function setDateFin(\DateTimeInterface $dateFin): self
    {
        $this->dateFin = $dateFin;

        return $this;
    }

    public function getNbUo(): ?float
    {
        return $this->nbUo;
    }

    public function setNbUo(float $nbUo): self
    {
        $this->nbUo = $nbUo;

        return $this;
    }

    public function getInfrastructure(): ?Infra
    {
        return $this->infrastructure;
    }

    public function setInfrastructure(?Infra $infrastructure): self
    {
        $this->infrastructure = $infrastructure;

        return $this;
    }

    public function getOffre(): ?Offre
    {
        return $this->offre;
    }

    public function setOffre(?Offre $offre): self
    {
        $this->offre = $offre;

        return $this;
    }
}
