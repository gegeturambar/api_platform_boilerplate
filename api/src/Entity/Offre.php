<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\OffreRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=OffreRepository::class)
 */
class Offre
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Unique
     */
    private $CodeArticle;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Unite;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Type;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $TypeHosting;

    /**
     * @ORM\OneToMany(targetEntity=OffreInfos::class, mappedBy="offre", orphanRemoval=true)
     */
    private $offreInfosId;

    /**
     * @ORM\OneToMany(targetEntity=Previsionnel::class, mappedBy="offre")
     */
    private $previsionnels;

    /**
     * @ORM\OneToMany(targetEntity=Realise::class, mappedBy="offre")
     */
    private $realises;

    public function __construct()
    {
        $this->offreInfos = new ArrayCollection();
        $this->previsionnels = new ArrayCollection();
        $this->realises = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCodeArticle(): ?string
    {
        return $this->CodeArticle;
    }

    public function setCodeArticle(string $CodeArticle): self
    {
        $this->CodeArticle = $CodeArticle;

        return $this;
    }

    public function getUnite(): ?string
    {
        return $this->Unite;
    }

    public function setUnite(string $Unite): self
    {
        $this->Unite = $Unite;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->Type;
    }

    public function setType(string $Type): self
    {
        $this->Type = $Type;

        return $this;
    }

    public function getTypeHosting(): ?string
    {
        return $this->TypeHosting;
    }

    public function setTypeHosting(string $TypeHosting): self
    {
        $this->TypeHosting = $TypeHosting;

        return $this;
    }

    /**
     * @return Collection|OffreInfos[]
     */
    public function getOffreInfos(): Collection
    {
        return $this->offreInfos;
    }

    public function addOffreInfo(OffreInfos $offreInfo): self
    {
        if (!$this->offreInfos->contains($offreInfo)) {
            $this->offreInfos[] = $offreInfo;
            $offreInfo->setOffre($this);
        }

        return $this;
    }

    public function removeOffreInfo(OffreInfos $offreInfo): self
    {
        if ($this->offreInfos->contains($offreInfo)) {
            $this->offreInfos->removeElement($offreInfo);
            // set the owning side to null (unless already changed)
            if ($offreInfo->getOffre() === $this) {
                $offreInfo->setOffre(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Previsionnel[]
     */
    public function getPrevisionnels(): Collection
    {
        return $this->previsionnels;
    }

    public function addPrevisionnel(Previsionnel $previsionnel): self
    {
        if (!$this->previsionnels->contains($previsionnel)) {
            $this->previsionnels[] = $previsionnel;
            $previsionnel->setOffre($this);
        }

        return $this;
    }

    public function removePrevisionnel(Previsionnel $previsionnel): self
    {
        if ($this->previsionnels->contains($previsionnel)) {
            $this->previsionnels->removeElement($previsionnel);
            // set the owning side to null (unless already changed)
            if ($previsionnel->getOffre() === $this) {
                $previsionnel->setOffre(null);
            }
        }

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
            $realise->setOffre($this);
        }

        return $this;
    }

    public function removeRealise(Realise $realise): self
    {
        if ($this->realises->contains($realise)) {
            $this->realises->removeElement($realise);
            // set the owning side to null (unless already changed)
            if ($realise->getOffre() === $this) {
                $realise->setOffre(null);
            }
        }

        return $this;
    }
}
