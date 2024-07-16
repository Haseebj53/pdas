function ProfileCard({ title, handle, image, description }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="columns is-centered">
            <p className="image is-192x192">
          <img src={image} alt="pda logo" />
            </p>
        </figure>
      </div>
      <div className="card-content p-auto mt-6">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
      <div className="content">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
