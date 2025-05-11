const animals = [
    {
      id: 1,
      name: "Mr. Fluffy",
      type: "cat",
      age: 3,
      color: "white",
      skills: ["jumping", "purring"],
      image: "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg"
    },
    {
      id: 2,
      name: "Rex",
      type: "dog",
      age: 5,
      color: "brown",
      skills: ["fetching", "barking", "digging"],
      image: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"
    },
    {
      id: 3,
      name: "Morty Smith",
      type: "character",
      age: 14,
      color: "yellow shirt",
      skills: ["screaming", "running"],
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
      id: 4,
      name: "Princess Meow",
      type: "cat",
      age: 2,
      color: "black",
      skills: ["sleeping", "posing", "meowing"],
      image: "https://cdn2.thecatapi.com/images/bpc.jpg"
    },
    {
      id: 5,
      name: "Barkley",
      type: "dog",
      age: 1,
      color: "white and brown",
      skills: ["tail-wagging", "howling"],
      image: "https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg"
    }
  ];

  const div=document.getElementById("div")
  for(images of animals){
    const fotka1=document.createElement("img")
    fotka1.src=images.image
    div.append(fotka1)
  }
  for(jmeno of animals){
    const names=document.createElement("h3")
    names.textContent=jmeno.name
    div.append(names)
  }
