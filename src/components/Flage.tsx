
interface FlagCard {
    flags:{
      png:string
      alt:string
    }
    population:string
    name:{
      common:string
    }
    capital:string[]
    region:string
   
}

interface DetailedRouteFlage {
    languages:{
      [key : string] :string
    }
    nativeName: {
			ara: {
				common: string
			}
      region:string
     capital:string[]

      subregion:string
      currencies: {
        [key : string]: {
          name: string
          symbol: string
        }
      }
      borders:string[],
}



function FlageCard({img,title}:FlagCard) {



  return (
    <div>Flage</div>
  )
}

export default FlageCard