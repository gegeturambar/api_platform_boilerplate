<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\AppInfosRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=AppInfosRepository::class)
 */
class AppInfos
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups({"app"})
     * @ORM\Column(type="string", length=255)
     */
    private $Name;

    /**
     * @Groups({"app"})
     * @ORM\Column(type="integer", nullable=true)
     */
    private $RcsaId;

    /**
     * @Groups({"app"})
     * @ORM\Column(type="integer", nullable=true)
     */
    private $PpId;

    /**
     * @Groups({"app"})
     * @ORM\Column(type="integer", nullable=true)
     */
    private $CdsId;

    /**
     * @Groups({"app"})
     * @ORM\Column(type="integer", nullable=true)
     */
    private $CommanditaireId;

    /**
     * @Groups({"app"})
     * @ORM\Column(type="integer", nullable=true)
     */
    private $OsiId;

    /**
     * @Groups({"app"})
     * @ORM\Column(type="string", length=500)
     */
    private $Description;

    /**
     * @Groups({"app"})
     * @ORM\Column(type="datetime")
     */
    private $CreatedAt;




    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->Name;
    }

    public function setName(string $Name): self
    {
        $this->Name = $Name;

        return $this;
    }

    public function getRcsaId(): ?int
    {
        return $this->RcsaId;
    }

    public function setRcsaId(?int $RcsaId): self
    {
        $this->RcsaId = $RcsaId;

        return $this;
    }

    public function getPpId(): ?int
    {
        return $this->PpId;
    }

    public function setPpId(?int $PpId): self
    {
        $this->PpId = $PpId;

        return $this;
    }

    public function getCdsId(): ?int
    {
        return $this->CdsId;
    }

    public function setCdsId(?int $CdsId): self
    {
        $this->CdsId = $CdsId;

        return $this;
    }

    public function getCommanditaireId(): ?int
    {
        return $this->CommanditaireId;
    }

    public function setCommanditaireId(?int $CommanditaireId): self
    {
        $this->CommanditaireId = $CommanditaireId;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->Description;
    }

    public function setDescription(?string $Description): self
    {
        $this->Description = $Description;

        return $this;
    }

    public function getOsiId(): ?int
    {
        return $this->OsiId;
    }

    public function setOsiId(?int $OsiId): self
    {
        $this->OsiId = $OsiId;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->CreatedAt;
    }

    public function setCreatedAt(\DateTimeInterface $CreatedAt): self
    {
        $this->CreatedAt = $CreatedAt;

        return $this;
    }



}
