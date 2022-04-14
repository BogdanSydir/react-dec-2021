const UserDetail = ({userDetail}) => {
    const {id, name, username, email, address, phone, website, company} = userDetail
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>address: <br/> street:{address?.street} <br/> suite:{address?.suite} <br/>
                zipcode: {address?.zipcode} <br/> geo: <br/> lat: {address?.geo.lat} <br/>
                lng: {address?.geo.lng}
            </div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <div>company:  <br/> name: {company?.name} <br/> catchPhrase: {company?.catchPhrase}
                <br/> bs: {company?.bs}
            </div>
        </div>
    );
};

export {UserDetail};