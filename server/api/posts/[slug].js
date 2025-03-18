import { promises as fs } from 'fs'
import path from 'path'

export default async (req, res) => {
    const { slug } = req.query

    try {
        const postPath = path.resolve('content', `${slug}.md`)
        const fileContent = await fs.readFile(postPath, 'utf-8')
        const { data, content } = parseMarkdown(fileContent)

        const post = {
            slug,
            title: data.title,
            description: data.description,
            content
        }

        res.status(200).json(post)
    } catch (error) {
        console.error('Error loading post:', error)
        res.status(500).json({ error: 'Failed to load post' })
    }
}

function parseMarkdown(content) {
    const regex = /---\n([\s\S]+?)\n---\n([\s\S]*)/
    const match = regex.exec(content)

    if (match) {
        const metadata = match[1].split('\n').reduce((acc, line) => {
            const [key, value] = line.split(':').map((item) => item.trim())
            if (key && value) acc[key] = value
            return acc
        }, {})

        return {
            data: metadata,
            content: match[2],
        }
    }

    return { data: {}, content: '' }
}
