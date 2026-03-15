import { createBucketClient } from "@cosmicjs/sdk";
import type {
  CosmicResponse,
  Project,
  Skill,
  Testimonial,
  WorkExperience
} from "@/types";

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string
});

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return "";
  if (typeof field === "string") return field;
  if (typeof field === "number" || typeof field === "boolean") return String(field);
  if (typeof field === "object" && field !== null && "value" in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === "object" && field !== null && "key" in field) {
    return String((field as { key: unknown }).key);
  }
  return "";
}

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === "object" && error !== null && "status" in error;
}

export async function getProjects(): Promise<Project[]> {
  try {
    const response = (await cosmic.objects
      .find({ type: "projects" })
      .props(["id", "title", "slug", "metadata"])
      .depth(1)) as CosmicResponse<Project>;

    return response.objects ?? [];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error("Failed to fetch projects.");
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: "projects", slug })
      .props(["id", "title", "slug", "metadata"])
      .depth(1);

    const project = response.object as Project;
    if (!project) return null;
    return project;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error("Failed to fetch project.");
  }
}

export async function getSkills(): Promise<Skill[]> {
  try {
    const response = (await cosmic.objects
      .find({ type: "skills" })
      .props(["id", "title", "slug", "metadata"])
      .depth(1)) as CosmicResponse<Skill>;

    const skills = response.objects ?? [];
    return skills.sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error("Failed to fetch skills.");
  }
}

export async function getWorkExperience(): Promise<WorkExperience[]> {
  try {
    const response = (await cosmic.objects
      .find({ type: "work-experience" })
      .props(["id", "title", "slug", "metadata"])
      .depth(1)) as CosmicResponse<WorkExperience>;

    const experiences = response.objects ?? [];
    return experiences.sort((a, b) => {
      const dateA = new Date(a.metadata?.start_date ?? "").getTime();
      const dateB = new Date(b.metadata?.start_date ?? "").getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error("Failed to fetch work experience.");
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = (await cosmic.objects
      .find({ type: "testimonials" })
      .props(["id", "title", "slug", "metadata"])
      .depth(1)) as CosmicResponse<Testimonial>;

    return response.objects ?? [];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error("Failed to fetch testimonials.");
  }
}