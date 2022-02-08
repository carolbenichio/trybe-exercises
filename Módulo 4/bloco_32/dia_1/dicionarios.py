info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

# object.key(info)

print(info.items())

info["recorrente"] = "sim"

del info["origem"]

print(info.items())