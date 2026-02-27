export default function InfoCard({name, picture, alt, description, linkName, linkAddress, subtitle})
{
    return <>
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 g-3">
        <div className="card" style={{minHeight: 510}}>
        <div className="card-header">
        <img className="card-img-top" src={picture} alt={alt}/>
        
        </div>
        <div className="card-body">
            <h4 className="card-title"> {name} </h4>
            <h5 className="card-subtitle mb-2 text-muted">{subtitle}</h5>
            <p className="card-text">{description}</p>
            
        </div>
        <a href={linkAddress} target="_blank" className="btn btn-info text-light">{linkName}</a>
        <div className="card-footer">

        </div>
        </div>
        
    </div>
    </>
}