import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CreateRoom() {
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <CardTitle>Create RPG Room</CardTitle>
        <CardDescription>Start a new room in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your RPG campaign" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Description</Label>
              <Input id="name" placeholder="Description of your RPG campaign" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Password</Label>
              <Input id="name" placeholder="Room Password (leave it empty for no password)" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Start</Button>
      </CardFooter>
    </Card>
  )
}
