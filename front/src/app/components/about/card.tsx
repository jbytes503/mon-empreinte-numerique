import styles from './button.module.css';

interface CardProps {
    name: string;
    title: string;
    description: string;
    icon: string;
}

const AuthorCard = ({ title, description, icon }: CardProps) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <img src={icon} alt={title} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default AuthorCard;
