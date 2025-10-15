import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProgramPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <h1 className="text-balance text-3xl font-bold">Program</h1>
      <p className="mt-2 text-muted-foreground">
        Detailed schedule will be announced soon. Below are the planned tracks.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Technical Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            Advances in agricultural statistics, big data analytics, ML, econometrics, and sustainability.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Workshops</CardTitle>
          </CardHeader>
          <CardContent>
            Hands-on tools for farmers, KVK personnel, and students; data tools for NRM and plant/animal sciences.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Farmers’ Sessions</CardTitle>
          </CardHeader>
          <CardContent>Demonstrations and success stories on using data and technology in agriculture.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Roundtables</CardTitle>
          </CardHeader>
          <CardContent>KVK-led extension services and policy dialogues for Vision 2047.</CardContent>
        </Card>
      </div>
    </main>
  )
}
