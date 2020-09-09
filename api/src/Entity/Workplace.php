<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\WorkplaceRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(normalizationContext={"groups"={"userApp"}})
 * @ORM\Entity(repositoryClass=WorkplaceRepository::class)
 */
class Workplace
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Users::class, inversedBy="userWorkplace")
     * @ORM\JoinColumn(nullable=false)
     */
    private $workplaceUser;

    /**
     * @Groups({"userApp"})
     * @ORM\OneToOne(targetEntity=Application::class)
     */
    private $App;

    /**
     * @Groups({"userApp"})
     * @ORM\Column(type="boolean")
     */
    private $IsFav;



    public function getId(): ?int
    {
        return $this->id;
    }


    public function getApp(): ?Application
    {
        return $this->App;
    }

    public function setApp(int $App): self
    {
        $this->App = $App;

        return $this;
    }

    public function getIsFav(): ?bool
    {
        return $this->IsFav;
    }

    public function setIsFav(bool $IsFav): self
    {
        $this->IsFav = $IsFav;

        return $this;
    }

    public function setWorkplaceUser(Users $workplaceUser): self
    {
        $this->workplaceUser = $workplaceUser;

        return $this;
    }
    public function getWorkplaceUser(): Users
    {
        return $this->workplaceUser;
    }


}
