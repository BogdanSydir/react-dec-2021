const Posts = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
        userId: {userId} <br/> id: {id} <br/> title: {title} <br/> body: {body}
        </div>
    );
};

export {Posts};