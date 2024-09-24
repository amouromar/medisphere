"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Video,
  Mic,
  MicOff,
  VideoOff,
  Phone,
  MessageSquare,
  Calendar as CalendarIcon,
  Clock,
} from "lucide-react";

export default function ConsultationPage() {
  const [activeTab, setActiveTab] = useState("schedule");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [message, setMessage] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);

  useEffect(() => {
    if (activeTab === "call" && !isCameraOn) {
      toggleCamera();
    }
  }, [activeTab]);

  const toggleCamera = async () => {
    try {
      if (isCameraOn) {
        const tracks = videoRef.current?.srcObject as MediaStream;
        tracks?.getTracks().forEach((track) => track.stop());
        if (videoRef.current) videoRef.current.srcObject = null;
        setIsCameraOn(false);
      } else {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) videoRef.current.srcObject = stream;
        setIsCameraOn(true);
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const toggleMic = () => {
    setIsMicOn(!isMicOn);
  };

  const endCall = () => {
    if (isCameraOn) toggleCamera();
    setActiveTab("schedule");
  };

  const scheduleAppointment = () => {
    console.log("Appointment scheduled for:", selectedDate);
    // Here you would typically make an API call to schedule the appointment
  };

  const sendMessage = () => {
    console.log("Message sent:", message);
    // Here you would typically make an API call to send the message
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Virtual Consultation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="call">Video Call</TabsTrigger>
              <TabsTrigger value="chat">Chat</TabsTrigger>
            </TabsList>
            <div className="mt-4 h-[500px] overflow-y-auto">
              <TabsContent value="schedule">
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <Label>Select a date for your appointment</Label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                    <Button
                      onClick={scheduleAppointment}
                      className="w-full mt-4"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      Schedule Appointment
                    </Button>
                  </div>
                  <div className="w-1/2">
                    <h3 className="text-lg font-semibold mb-4">
                      Appointment History
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          date: "2023-09-15",
                          time: "10:00 AM",
                          doctor: "Dr. Smith",
                        },
                        {
                          date: "2023-08-30",
                          time: "2:30 PM",
                          doctor: "Dr. Johnson",
                        },
                        {
                          date: "2023-08-10",
                          time: "11:15 AM",
                          doctor: "Dr. Williams",
                        },
                      ].map((appointment, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="font-semibold">
                                  {appointment.doctor}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {appointment.date}
                                </p>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                <span className="text-sm">
                                  {appointment.time}
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="call">
                <div className="space-y-4">
                  <div className="relative w-full h-0 pb-[56.25%]">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      controls
                      className="absolute top-0 left-0 w-full h-full object-contain bg-gray-100 rounded-lg"
                    />
                  </div>
                  <div className="flex justify-center space-x-4">
                    <Button
                      onClick={toggleCamera}
                      variant={isCameraOn ? "default" : "secondary"}
                    >
                      {isCameraOn ? (
                        <Video className="h-4 w-4" />
                      ) : (
                        <VideoOff className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      onClick={toggleMic}
                      variant={isMicOn ? "default" : "secondary"}
                    >
                      {isMicOn ? (
                        <Mic className="h-4 w-4" />
                      ) : (
                        <MicOff className="h-4 w-4" />
                      )}
                    </Button>
                    <Button onClick={endCall} variant="destructive">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="chat">
                <div className="space-y-4">
                  <div className="h-96 bg-gray-100 rounded-lg p-4 overflow-y-auto">
                    <div className="flex items-start mb-4">
                      <Avatar className="mr-2">
                        <AvatarImage
                          src="/placeholder.svg?height=40&width=40"
                          alt="Pharmacist"
                        />
                        <AvatarFallback>PH</AvatarFallback>
                      </Avatar>
                      <div className="bg-blue-100 rounded-lg p-2">
                        <p className="text-sm">
                          Hello! How can I assist you today?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message..."
                    />
                    <Button onClick={sendMessage}>
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
