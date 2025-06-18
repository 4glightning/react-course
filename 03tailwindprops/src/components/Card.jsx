import React from 'react'

function Card({gamename = "Game Name"}) {
  return (
    <div class="flex flex-col items-center p-7 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0dwhJeGOK6Q49dmka15WFAiI2PZuVCoQ8Vw&s" />
  </div>
  <div class="flex">
    <span>{gamename}</span>
    <span>The Anti-Patterns</span>
    <span class="flex">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
  )
}

export default Card