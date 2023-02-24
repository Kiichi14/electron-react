import './button.module.scss';
// eslint-disable-next-line import/no-named-as-default

// eslint-disable-next-line no-shadow
enum Icons {
  book = '📚',
  prayer = '🙏',
}

type Props = {
  text?: string;
  icon?: keyof typeof Icons;
};

const Button = (props: Props) => {
  const { text, icon } = props;
  return (
    <button type="button">
      {icon && (
        <span data-testid="button-icon" role="img" aria-label="books">
          {Icons[icon]}
        </span>
      )}
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: 'Bouton',
} as Props;
export default Button;
