<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\InfraRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=InfraRepository::class)
 */
class Infra
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity=Realise::class, mappedBy="infrastructure", orphanRemoval=true)
     */
    private $realises;

    /**
     * @ORM\ManyToOne(targetEntity=Application::class, inversedBy="infras")
     * @ORM\JoinColumn(nullable=false)
     */
    private $application;

    public function __construct()
    {
        $this->realises = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Realise[]
     */
    public function getRealises(): Collection
    {
        return $this->realises;
    }

    public function addRealise(Realise $realise): self
    {
        if (!$this->realises->contains($realise)) {
            $this->realises[] = $realise;
            $realise->setInfrastructure($this);
        }

        return $this;
    }

    public function removeRealise(Realise $realise): self
    {
        if ($this->realises->contains($realise)) {
            $this->realises->removeElement($realise);
            // set the owning side to null (unless already changed)
            if ($realise->getInfrastructure() === $this) {
                $realise->setInfrastructure(null);
            }
        }

        return $this;
    }

    public function getApplication(): ?Application
    {
        return $this->application;
    }

    public function setApplication(?Application $application): self
    {
        $this->application = $application;

        return $this;
    }
}
