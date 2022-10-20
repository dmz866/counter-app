import PropTypes from "prop-types";

//NO SE RENDERIZA A CADA RATO
const obj = { name: 'Shi', lastName: 'Dosh' };

export const FirstApp = ({ title, subTitle }) => {
	return (
		<>
			<h1>{title}</h1>
			<h3>{subTitle}</h3>
			<p>FirstApp</p>
			<p>{GetName()}</p>
			{/*<h2>Commentario</h2>*/}
			<p>{JSON.stringify(obj)}</p>
		</>
	)
}

FirstApp.propTypes = {
	title: PropTypes.string.isRequired
};

FirstApp.defaultProps = {
	subTitle: 'Subtitulo Default'
};

const GetName = () => 'DMZ';

