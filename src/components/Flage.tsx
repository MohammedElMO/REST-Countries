import { FlagCardT } from "../api/allFlags"

function FlageCard({ ...props }: FlagCardT) {
  const { flags, capital, name, population, region } = props

  return (
    <section className="flex cursor-pointer flex-col overflow-hidden rounded-md bg-dark-blue font-nunito shadow-md">
      <div className="aspect-video">
        <img className="aspect-video w-full" src={flags.png} alt={flags.alt} />
      </div>
      <div className="flex  flex-col gap-2 p-5 text-left">
        <h2 className="mb-4 text-center text-2xl font-bold text-white">{name.common}</h2>
        <p className="text-very-light-gray">
          <span className="mr-1 font-semibold text-white">Population:</span>
          {population}
        </p>
        <p className="text-very-light-gray">
          <span className="mr-1 font-semibold text-white">Region:</span>
          {region}
        </p>
        <p className="text-very-light-gray">
          <span className="mr-1 font-semibold text-white">Capital:</span>
          {capital}
        </p>
      </div>
    </section>
  )
}

export default FlageCard
