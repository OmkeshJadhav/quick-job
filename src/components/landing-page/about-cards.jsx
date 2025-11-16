import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const AboutCards = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Card>
                <CardHeader>
                    <CardTitle>For Job Seekers</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Search and apply for jobs, track applications, and more</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>For Employers</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Post jobs, manage applications, and find the best candidates.</p>
                </CardContent>
            </Card>
        </section>
    )
}

export default AboutCards