
export default function PokemonCard(props, key) {
    return (
        <>
            <div className='card' key={key}>
                <img
                    src={`https://img.pokemondb.net/artwork/large/${props.name}.jpg`}
                    alt={props.name}
                    className='card_img'
                />
                <div className="bottom-left">
                    <div className='prduct-infoo'>
                        <span className='product-title'>{props.name}</span><br />
                    </div>
                </div>
            </div>
        </>
    )
}