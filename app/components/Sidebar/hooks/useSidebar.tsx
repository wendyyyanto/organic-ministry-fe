"use client";

import { useAnimate } from "framer-motion";
import { stagger } from "framer-motion/dom";
import { useEffect } from "react";

export const useSidebar = () => {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		animate(
			".sidebar-item",
			{
				opacity: 1,
				x: 0
			},
			{
				delay: stagger(0.1, { ease: "easeIn", startDelay: 0.25 })
			}
		);

		return () => {};
	}, []);

	return { scope };
};
