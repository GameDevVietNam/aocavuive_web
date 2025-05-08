'use client'

import {
	collection,
	doc,
	getDocs,
	query,
	setDoc,
	where,
} from 'firebase/firestore'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { IoAdd } from 'react-icons/io5'
import { toast } from 'sonner'
import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { db } from '@/config/firebase'
import { style } from '@/constants/style'
import slugify from '@/utils/slugify'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
	title: z.string().min(3),
	description: z.string().min(10),
	content: z.string().min(50),
	tags: z.array(z.string()),
	thumbnailURL: z.string().url(),
})

const CreateBlog = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		values: {
			title: '',
			description: '',
			content: '',
			tags: [],
			thumbnailURL: '',
		},
		mode: 'onChange',
	})
	const [isDisabled, setIsDisabled] = useState(false)
	const [tag, setTag] = useState('')

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		try {
			setIsDisabled(true)

			const slug = slugify(data.title)

			// Check if slug exists
			const existing = await getDocs(
				query(collection(db, 'blogs'), where('slug', '==', slug)),
			)

			if (!existing.empty) {
				toast.error('Slug already exists. Try a different title.')
				return
			}

			const id = uuidv4()
			// Save document to Firestore
			await setDoc(doc(db, 'blogs', id), {
				...data,
				id,
				slug,
				createdAt: Date.now(),
				updatedAt: Date.now(),
			})

			toast.success('Document added successfully!')
			form.reset()
		} catch (error) {
			toast.error(JSON.stringify(error))
		} finally {
			setIsDisabled(false)
		}
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				id='subscribe'
				className='space-y-7'>
				<div className='text-3xl font-bold text-center'>
					Create blog
				</div>

				<FormField
					control={form.control}
					name='thumbnailURL'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Thumbnail URL</FormLabel>
							<FormControl>
								<Textarea
									placeholder='shadcn'
									{...field}
									className='border-transparent'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Textarea
									placeholder='shadcn'
									{...field}
									className='border-transparent'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea
									placeholder='shadcn'
									{...field}
									className='border-transparent'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='content'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Content</FormLabel>
							<FormControl>
								<Textarea
									placeholder='shadcn'
									{...field}
									className='border-transparent'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Controller
					control={form.control}
					name='tags'
					render={({ field: { onChange, value } }) => (
						<div className='space-y-2'>
							<div className='text-sm'>Tags</div>

							<div className='flex items-center gap-3'>
								<Input
									value={tag}
									onChange={(e) => setTag(e.target.value)}
								/>

								<Button
									type='button'
									onClick={() => {
										onChange([...value, tag])
										setTag('')
									}}>
									<IoAdd />
								</Button>
							</div>

							<div className='flex items-center gap-3 flex-wrap'>
								{value.map((tag) => (
									<Badge key={tag}>{tag}</Badge>
								))}
							</div>

							<div className='text-xs font-semibold text-red-600'>
								{form.formState.errors.tags?.message}
							</div>
						</div>
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
			</form>
		</Form>
	)
}

export default CreateBlog
