async function getEnterprise(ref){
    await fetch(`https://api.pappers.fr/v2/recherche?q=${ref.replace(' ','+')}&entreprise_cessee=false&api_token=97a405f1664a83329a7d89ebf51dc227b90633c4ba4a2575&precision=standard&bases=entreprises,dirigeants,beneficiaires,publications&page=1&par_page=50`,{
        method: 'GET'
    })
    .then(response => response.json())
    .then(response => {
        let obj = []
        let objSort = []
        response.resultats.map(item => {
            obj.push({
                name: item.nom_entreprise,
                siren: item.siren_formate,
                villes: item.villes
            })
            objSort.push(item.nom_entreprise);
        })
        const result = {
            obj: obj,
            total: response.total
        };
        return result;
    })
    .catch(err => console.error(err))
}