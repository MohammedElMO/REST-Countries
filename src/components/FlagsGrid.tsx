import getAllFlags from "../hooks/useAllFlags"
import useSearchFlage from "../hooks/useSearchFlage"
import FlageCard from "./Flage"

function FlagsGrid({
  SelectedRegion,
  flageName,
}: {
  SelectedRegion: string
  flageName: string
}) {
  const { flags } = getAllFlags()
  const { searchFlag } = useSearchFlage(flageName)
  if (flageName) {
    return (
      <section className=" mx-10 mb-5 grid gap-x-10 gap-y-11 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {searchFlag
          ?.filter((f) => {
            return SelectedRegion === "ALL regions" || SelectedRegion === ""
              ? flags
              : f.region === SelectedRegion
          })
          .map((flag) =>
            flag.name.common === "Israel" ? null : (
              <FlageCard key={flag.name.common} {...flag} />
            )
          )}
      </section>
    )
  }

  return (
    <section className=" mx-10 mb-5 grid gap-x-10 gap-y-11 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {flags
        ?.filter((f) => {
          return SelectedRegion === "ALL regions" || SelectedRegion === ""
            ? flags
            : f.region === SelectedRegion
        })
        .map((flag) =>
          flag.name.common === "Israel" ? null : (
            <FlageCard key={flag.name.common} {...flag} />
          )
        )}
    </section>
  )
}

export default FlagsGrid
