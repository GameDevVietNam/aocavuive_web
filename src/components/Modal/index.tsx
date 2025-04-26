import { AnimatePresence, memo } from "motion/react";
import { FC, ReactNode } from "react";

import { motion } from "motion/react";

interface ModalProps {
	children: ReactNode;
	isOpen: boolean;
	onOpenChange: () => void;
}

const Modal: FC<ModalProps> = ({ children, isOpen, onOpenChange }) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					onClick={onOpenChange}
					className="fixed inset-0 flex items-center justify-center z-[9999]"
				>
					<div className="absolute inset-0 bg-[rgba(0,0,0,.7)]"></div>
					<motion.div
						onClick={(e) => e.stopPropagation()}
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.5 }}
						className="p-4 z-20 bg-dark rounded-2xl text-white max-w-md w-full shadow-xl"
					>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
