"use client";

import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

export const useTeacher = () => {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		animate(
			".Custom-Teacher-Card",
			{
				opacity: 1,
				y: 0
			},
			{
				delay: stagger(0.1, { ease: "easeIn", startDelay: 0.25 })
			}
		);

		return () => {};
	}, []);

	return { scope };
};
