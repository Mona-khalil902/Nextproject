import './InfoWraper.css'

function InfoWraper() {

  return (
    <div id='InfoWraperdiv'>
        <label>Perfume</label>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
        <div id='risediv'>
            <h2>$149.99</h2>
            <label id='risedelet'><del>$169.99</del></label>
        </div>
        <button id='buttondiv'>Add to Cart</button>

    </div>
  )
}

export default InfoWraper