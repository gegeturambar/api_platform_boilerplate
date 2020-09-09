<?php

namespace App\Entity;

use App\Repository\UsersRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=UsersRepository::class)
 * @ApiResource()
 */
class Users implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups({"userApp"})
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $nni;

    /**
     * @Groups({"userApp"})
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @Groups({"userApp"})
     * @ORM\Column(type="string", length=150, nullable=true)
     */
    private $prenom;

    /**
     * @Groups({"userApp"})
     * @ORM\Column(type="string", length=150, nullable=true)
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $email;

    /**
     * @ORM\Column(type="boolean", options={"default":1})
     */
    private $isActive;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $CreatedAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $LastLogin;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $CdsId;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $OsiId;


    /**
     * @Groups({"userApp"})
     * @ORM\OneToMany(targetEntity=Workplace::class, cascade={"persist", "remove"}, mappedBy="workplaceUser")
     */
     private $userWorkplace;

    public function __construct()
    {
        $this->userWorkplace = new ArrayCollection();
    }
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNni(): ?string
    {
        return $this->nni;
    }

    public function setNni(string $nni): self
    {
        $this->nni = $nni;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->nni;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(?string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(?string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): self
    {
        $this->isActive = $isActive;

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

    public function getLastLogin(): ?\DateTimeInterface
    {
        return $this->LastLogin;
    }

    public function setLastLogin(\DateTimeInterface $LastLogin): self
    {
        $this->LastLogin = $LastLogin;

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

    public function getOsiId(): ?int
    {
        return $this->OsiId;
    }

    public function setOsiId(?int $OsiId): self
    {
        $this->OsiId = $OsiId;

        return $this;
    }

    /**
     * @return Collection|userWorkplace[]
     */
    public function getWorkplaceUsers(): Collection
    {
        return $this->userWorkplace;
    }

    public function addWorkplaceUser(Users $userWorkplace)
    {
        if (!$this->userWorkplace->contains($userWorkplace)) {
            $this->userWorkplace[] = $userWorkplace;
            $userWorkplace->setWorkplaceUser($this);
        }

        return $this;

    }

    public function removeWorkplaceUser(Users $userWorkplace)
    {
        if ($this->userWorkplace->contains($userWorkplace)) {
            $this->userWorkplace->removeElement($userWorkplace);
            // set the owning side to null (unless already changed)
            if ($userWorkplace->getWorkplaceUser() === $this) {
                $userWorkplace->setWorkplaceUser(null);
            }
        }

        return $this;
    }

}
