interface ILabelProps {
  className?: string;
}
export const Label: React.FC<ILabelProps> = ({ children }) => {
  return <div className="bg-yellow-500">{children}</div>;
};
