import React, { useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import colorscheme from "../../utils/colors";
import logoLarge from "../../assets/logo-large.svg";
import Image from "../../components/Image";
import FancyButton from "../../components/FancyButton";
import "./statics/css/404.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/Contexts/UserContext";
import { Redirect } from "react-router-dom";
import configs from "../../utils/configs";
import reactJoiValidation from "react-joi-validation";

const NotFound = (props) => {
	return (
		<>
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				className="notFound_root"
				wrap="nowrap"
			>
				<Grid item className="notFound_logo">
					<Link to="/login">
						<Image
							src={logoLarge}
							alt="Sikshyalaya"
							addStyles="notFound_image"
						/>
					</Link>
				</Grid>
				<Grid item className="notfound_panelContainer">
					<Grid
						container
						className="notfound_404Container"
						direction="column"
						alignItems="center"
						justifyContent="center"
					>
						<Grid item className="notFound_404Message">
							<a className="notFound_404giant404">404</a>
							<a className="notFound_pageNotFound">
								Page Not found
							</a>

							<p className="notFound_hmm">
								Hmm....Seems like you're lost in a perpetual
								black hole. Let us help guide you out and get
								you back home.
							</p>
						</Grid>
						<Grid item classname="notfound_goHome">
							<Grid
								container
								direction="row"
								alignItems="flex-start"
								justifyContent="center"
								spacing={2}
							>
								<Grid item classname="notfound_textContainer">
									<a classname="notfound_returnText>">
										Return to Dashboard
									</a>
								</Grid>
								<Grid item classname="notFound_returnHome">
									<Link to="/landing">
										<FancyButton
											color={colorscheme.purple3}
											className="notfound_fancyButton"
										/>
									</Link>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default NotFound;
