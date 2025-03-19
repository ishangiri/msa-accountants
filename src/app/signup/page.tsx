"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpFormData } from "./schema"; // Adjust the path if needed

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      topics: [],
      receiveNews: false,
      receiveNewsletter: false,
    },
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log("Sign Up Data:", data);
    // Handle form submission (e.g., send data to an API)
  };

  const topics = watch("topics") || [];
  const receiveNews = watch("receiveNews");
  const receiveNewsletter = watch("receiveNewsletter");

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Sign Up for MSA Accountants</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Register to access personalized accounting, taxation, and business advisory services.
          </p>
        </div>
      </section>

      {/* Sign Up Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-lg">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Register New User</h2>
            <p className="text-gray-600 text-center mb-6">
              Please fill in all the fields below, including identifying your areas of interest.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* First Name */}
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" {...register("firstName")} />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>

              {/* Surname */}
              <div>
                <Label htmlFor="surname">Surname *</Label>
                <Input id="surname" {...register("surname")} />
                {errors.surname && (
                  <p className="text-red-500 text-sm mt-1">{errors.surname.message}</p>
                )}
              </div>

              {/* Organization */}
              <div>
                <Label htmlFor="organization">Organization</Label>
                <Input id="organization" {...register("organization")} />
              </div>

              {/* Date of Birth */}
              <div>
                <Label>Date of Birth</Label>
                <div className="flex space-x-4">
                  <Select onValueChange={(value) => setValue("dobDay", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Day" />
                    </SelectTrigger>
                    <SelectContent>
                      {[...Array(31)].map((_, i) => (
                        <SelectItem key={i + 1} value={`${i + 1}`}>
                          {i + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select onValueChange={(value) => setValue("dobMonth", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Month" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                      ].map((month, i) => (
                        <SelectItem key={i} value={month}>
                          {month}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select onValueChange={(value) => setValue("dobYear", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {[...Array(100)].map((_, i) => {
                        const year = new Date().getFullYear() - i;
                        return (
                          <SelectItem key={year} value={`${year}`}>
                            {year}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Gender */}
              <div>
                <Label>Gender</Label>
                <Select onValueChange={(value) => setValue("gender", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer Not to Say</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Username */}
              <div>
                <Label htmlFor="username">User Name *</Label>
                <Input id="username" {...register("username")} />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <Label htmlFor="password">Password *</Label>
                <Input id="password" type="password" {...register("password")} />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <Input id="confirmPassword" type="password" {...register("confirmPassword")} />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" {...register("email")} />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" {...register("phone")} />
              </div>

              {/* Mobile */}
              <div>
                <Label htmlFor="mobile">Mobile</Label>
                <Input id="mobile" type="tel" {...register("mobile")} />
              </div>

              {/* Fax */}
              <div>
                <Label htmlFor="fax">Fax</Label>
                <Input id="fax" {...register("fax")} />
              </div>

              {/* Topics of Interest */}
              <div>
                <Label>Topics (Click to view categories)</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="practiceNews"
                      checked={topics.includes("practiceNews")}
                      onCheckedChange={(checked) => {
                        const newTopics = checked
                          ? [...topics, "practiceNews"]
                          : topics.filter((topic) => topic !== "practiceNews");
                        setValue("topics", newTopics);
                      }}
                    />
                    <Label htmlFor="practiceNews">Practice News</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="aboutOurWebsite"
                      checked={topics.includes("aboutOurWebsite")}
                      onCheckedChange={(checked) => {
                        const newTopics = checked
                          ? [...topics, "aboutOurWebsite"]
                          : topics.filter((topic) => topic !== "aboutOurWebsite");
                        setValue("topics", newTopics);
                      }}
                    />
                    <Label htmlFor="aboutOurWebsite">About Our Website</Label>
                  </div>
                </div>
              </div>

              {/* Notification Preferences */}
              <div>
                <Label>Do you want to receive notification of relevant news articles as they are published?</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsYes"
                      checked={receiveNews === true}
                      onCheckedChange={(checked) => setValue("receiveNews", checked === true)}
                    />
                    <Label htmlFor="newsYes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsNo"
                      checked={receiveNews === false}
                      onCheckedChange={(checked) => setValue("receiveNews", checked === false)}
                    />
                    <Label htmlFor="newsNo">No</Label>
                  </div>
                </div>
              </div>

              <div>
                <Label>Do you want to receive our monthly e-newsletter of business-related information?</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletterYes"
                      checked={receiveNewsletter === true}
                      onCheckedChange={(checked) => setValue("receiveNewsletter", checked === true)}
                    />
                    <Label htmlFor="newsletterYes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletterNo"
                      checked={receiveNewsletter === false}
                      onCheckedChange={(checked) => setValue("receiveNewsletter", checked === false)}
                    />
                    <Label htmlFor="newsletterNo">No</Label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Register
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}