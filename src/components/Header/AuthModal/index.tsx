import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa6";

import { style } from "@/constants/style";
import useDisclosure from "@/hooks/useDisclosure";
import { Button } from "@/components/ui/button";
import Modal from "@/components/Modal";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8).max(20),
});

const AuthModal = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		values: {
			email: "",
			password: "",
		},
		mode: "onChange",
	});
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [isDisabled, setIsDisabled] = useState(false);

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		try {
			setIsDisabled(true);
		} catch (error) {
		} finally {
			setIsDisabled(false);
		}
	};

	return (
		<>
			<Button
				onClick={onOpen}
				style={{
					backgroundImage: style.backgroundImage,
				}}
			>
				Log In
			</Button>

			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<Form {...form}>
					<form
						className="space-y-7"
						onSubmit={form.handleSubmit(onSubmit)}
					>
						<div className="text-3xl text-center font-bold">
							Welcome to Ao Ca Vui Ve
						</div>

						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											placeholder="shadcn"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											placeholder="shadcn"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="items-top flex space-x-2">
							<Checkbox id="terms1" />
							<div className="grid gap-1.5 leading-none">
								<label
									htmlFor="terms1"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Accept terms and conditions
								</label>
								<p className="text-sm text-muted-foreground">
									You agree to our Terms of Service and
									Privacy Policy.
								</p>
							</div>
						</div>

						<Button
							style={{
								backgroundImage: style.backgroundImage,
							}}
							className="w-full"
							disabled={isDisabled}
							type="submit"
						>
							Submit
						</Button>

						<div className="flex items-center gap-3">
							<div className="flex-1 h-[2px] rounded-full bg-gray-200"></div>
							<div className="srhink-0 font-semibold text-gray-500">
								OR
							</div>
							<div className="flex-1 h-[2px] rounded-full bg-gray-200"></div>
						</div>

						<div className="flex items-center gap-3">
							<Button className="flex-1 bg-blue-600 text-white">
								<FaFacebookF />
								Facebook
							</Button>

							<Button
								style={{
									backgroundImage: style.backgroundImage,
								}}
								className="flex-1"
							>
								<FaGoogle />
								Google
							</Button>
						</div>
					</form>
				</Form>
			</Modal>
		</>
	);
};

export default AuthModal;
