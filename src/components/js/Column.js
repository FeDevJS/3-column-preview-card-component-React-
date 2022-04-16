import React from 'react';

export const Column = function(props) {
	return (
		<section className={`columns ${props.colClass}`}>
			<header className="title__container">
				<h2 className={`columns__titles ${props.titleClass}`}>{props.title}</h2>
			</header>
			<div className="icon__container">
				<div className={`car__icons ${props.carIcon}`}></div>
			</div>
			<article className="description__container">
				<p className={`columns__descriptions ${props.descriptionClass}`}>{props.description}</p>
			</article>
			<article class="button__container">
				<div className={`buttons ${props.btnClass}`}>
					<a href="#sd" rel="noopener" className="links">Learn more</a>
				</div>
			</article>
		</section>
	);
};