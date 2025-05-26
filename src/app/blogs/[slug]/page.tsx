import { collection, getDocs } from 'firebase/firestore'

import { db } from '@/config/firebase'

import Blog from './Blog'

export async function generateStaticParams() {
	const blogsRef = collection(db, 'blogs')
	const snapshot = await getDocs(blogsRef)

	return snapshot.docs.map((doc) => ({
		slug: doc.data().slug,
	}))
}

const BlogDetail = async ({
	params,
}: {
	params: Promise<{ slug: string }>
}) => {
	const { slug } = await params

	return <Blog slug={slug} />
}

export default BlogDetail
