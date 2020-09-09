<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ApplicationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(normalizationContext={"groups"={"app"}})
 *
 * @ORM\Entity(repositoryClass=ApplicationRepository::class)
 */
class Application
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     *
     * @Groups({"app","userApp"})
     * @ORM\Column(type="string", unique=true, length=10)
     * @Assert\Unique
     */
    private $ins;

    /**
     * @Groups({"app"})
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $demantelementDate;

    /**
     * @Groups({"app","userApp"})
     * @ORM\OneToOne(targetEntity=AppInfos::class)
     *
     */
    private $appInfos;

    /**
     * @Groups({"app","userApp"})
     * @ORM\OneToMany(targetEntity=Infra::class, mappedBy="application", orphanRemoval=true)
     */
    private $infras;

    public function __construct()
    {
           $this->infras = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIns(): ?string
    {
        return $this->ins;
    }

    public function setIns(string $ins): self
    {
        $this->ins = $ins;

        return $this;
    }

    public function getDemantelementDate(): ?\DateTimeInterface
    {
        return $this->demantelementDate;
    }

    public function setDemantelementDate(?\DateTimeInterface $demantelementDate): self
    {
        $this->demantelementDate = $demantelementDate;

        return $this;
    }
    public function getAppInfos(): ?AppInfos
    {
        return $this->appInfos;
    }

    public function setAppInfos(AppInfos $appInfos): AppInfos
    {
        $this->appInfos = $appInfos;

        return $this;
    }



    /**
     * @return Collection|Infra[]
     */
    public function getInfras(): Collection
    {
        return $this->infras;
    }

    public function addInfra(Infra $infra): self
    {
        if (!$this->infras->contains($infra)) {
            $this->infras[] = $infra;
            $infra->setApplication($this);
        }

        return $this;
    }

    public function removeInfra(Infra $infra): self
    {
        if ($this->infras->contains($infra)) {
            $this->infras->removeElement($infra);
            // set the owning side to null (unless already changed)
            if ($infra->getApplication() === $this) {
                $infra->setApplication(null);
            }
        }

        return $this;
    }
}
