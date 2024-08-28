interface Props {
  params: { id: string };
}

export default async function PokemonPage({ params }: Props) {
  return <div>Pokemon {params.id}</div>;
}
