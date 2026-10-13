"use client";
import { useState } from "react";
import { Alert, Button, TextInput } from "@mantine/core";
import { IconAlertCircle, IconConfetti } from "@tabler/icons-react";
import styles from "./state-interest-form.module.css";
import { requestSchool } from "@/lib/api";
import { trackSchoolRequestSubmitted } from "@/lib/analytics";

/**
 * Variant B conversion for state feeler pages: a short on-page form
 * instead of sending visitors to the full add-school page. Four fields,
 * plain words. Submits to the same school-request endpoint the
 * add-school form uses; the message field records the source page so
 * admins (and the experiment read) can tell B submissions apart.
 */
export default function StateInterestForm({ state }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [city, setCity] = useState("");
  // Honeypot: hidden from people, tempting to bots.
  const [website, setWebsite] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // The school-request endpoint expects the same state strings the
  // add-school form sends ("Washington, D.C.", not "District of Columbia").
  const stateValue = state.abbr === "DC" ? "Washington, D.C." : state.name;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      await requestSchool({
        name: name.trim(),
        email: email.trim(),
        school_name: schoolName.trim(),
        city: city.trim(),
        state: stateValue,
        message: `Count-us-in form on /locations/${state.slug} (variant B)`,
        website,
      });
      trackSchoolRequestSubmitted({ school: schoolName.trim(), state: stateValue });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Failed to send interest form:", err);
      setError("Something went wrong. Please try again in a minute.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={styles.card}>
        <div className={styles.success}>
          <IconConfetti size={44} stroke={1.5} className={styles.successIcon} />
          <h2 className={styles.successTitle}>You are in!</h2>
          <p className={styles.successText}>
            Thanks! We will email you at <strong>{email.trim()}</strong> when{" "}
            {state.name} schools can start making their books.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.card} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <TextInput
          label="Your name"
          placeholder="First and last name"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          className={styles.grow}
        />
        <TextInput
          label="Your email"
          type="email"
          placeholder="you@example.org"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          className={styles.grow}
        />
      </div>

      <TextInput
        label="School name"
        placeholder="e.g. Desert Sun Elementary"
        required
        value={schoolName}
        onChange={(e) => setSchoolName(e.currentTarget.value)}
      />

      <TextInput
        label="City"
        placeholder="e.g. Surprise"
        required
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
      />

      <p className={styles.note}>
        That is all we need. We will only email you about your school
        getting started in {state.name}.
      </p>

      <div className={styles.honeypot} aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.currentTarget.value)}
          />
        </label>
      </div>

      {error && (
        <Alert color="red" variant="light" icon={<IconAlertCircle size={16} />}>
          {error}
        </Alert>
      )}

      <Button type="submit" size="lg" fullWidth loading={isSubmitting}>
        Count us in
      </Button>
    </form>
  );
}
