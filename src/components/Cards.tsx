import Card from "./Card";


const Cards = () => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row gap-4'>
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default Cards;