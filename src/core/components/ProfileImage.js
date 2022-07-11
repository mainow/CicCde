function ProfileImage({ src, medium, className }) {
    const classNames = medium ? "profile-image-md" : "profile-image-sm";
    return (
        <div>
            <img className={`profile-image ${classNames} ${className}`} src={ src } alt="Profile Image" />
        </div>
    );
}

export default ProfileImage;  