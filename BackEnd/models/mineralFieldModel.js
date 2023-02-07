class mineralField {
  constructor(
    family,
    name,
    description,
    chimicalFormula,
    crystalMesh,
    durete,
    color,
    eclat,
    opacity,
    density,
    habitus,
    image
  ) {
    this.family = family
    this.name = name
    this.description = description
    ;(this.chimicalFormula = chimicalFormula), (this.crystalMesh = crystalMesh)
    this.durete = durete
    this.color = color
    this.eclat = eclat
    this.opacity = opacity
    this.density = density
    this.habitus = habitus
    this.image = image
  }
}

exports.default = mineralField
