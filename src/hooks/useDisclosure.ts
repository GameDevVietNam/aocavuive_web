"use client";

import { useState } from "react";

const useDisclosure = () => {
	const [isOpen, setIsOpen] = useState(false);

	const onOpen = () => setIsOpen(true);
	const onOpenChange = () => setIsOpen(!isOpen);

	return { isOpen, onOpen, onOpenChange };
};

export default useDisclosure;
