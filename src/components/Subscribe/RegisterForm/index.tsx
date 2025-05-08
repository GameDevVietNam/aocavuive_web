import {
    collection, doc, getCountFromServer, getDocs, query, setDoc, where
} from 'firebase/firestore'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { db } from '@/config/firebase'
import { style } from '@/constants/style'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
	email: z.string().email(),
})

const RegisterForm = () => {
	const [subscribersCount, setSubscribersCount] = useState(0)
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		values: {
			email: '',
		},
		mode: 'onChange',
	})
	const [isDisabled, setIsDisabled] = useState(false)

	useEffect(() => {
		;(async () => {
			const coll = collection(db, 'subscribers')
			const snapshot = await getCountFromServer(coll)
			const count = snapshot.data().count
			setSubscribersCount(count)
		})()
	}, [])

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		try {
			setIsDisabled(true)

			const usersRef = collection(db, 'subscribers')
			const emailQuery = query(usersRef, where('email', '==', data.email))
			const querySnapshot = await getDocs(emailQuery)

			if (!querySnapshot.empty) {
				toast.error('Email already exists')
				return
			}

			const id = uuidv4()
			await setDoc(doc(usersRef, id), {
				id,
				...data,
				createdAt: Date.now(),
				updatedAt: Date.now(),
			})

			toast.success('User created successfully')
			form.reset()
		} catch (error) {
			toast.error(`Error: ${JSON.stringify(error)}`)
		} finally {
			setIsDisabled(false)
		}
	}

	return (
		<Form {...form}>
			<motion.form
				initial={{
					translateX: 20,
					opacity: 0,
				}}
				whileInView={{
					translateX: 0,
					opacity: 1,
				}}
				onSubmit={form.handleSubmit(onSubmit)}
				id='subscribe'
				className='max-w-sm w-full rounded-2xl bg-white shadow-2xl p-4 text-black space-y-7'>
				<div className='text-center space-y-2'>
					<div className='text-3xl font-bold'>Pre Register</div>
					<div>
						<span className='font-bold shadow-md rounded-2xl p-2 bg-gray-900 text-white'>
							{subscribersCount + 4897}
						</span>{' '}
						users has registered, how about you?
					</div>
				</div>

				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder='shadcn'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					style={{
						backgroundImage: style.backgroundImage,
					}}
					className='w-full'
					disabled={isDisabled}
					type='submit'>
					Submit
				</Button>
			</motion.form>
		</Form>
	)
}

export default RegisterForm
