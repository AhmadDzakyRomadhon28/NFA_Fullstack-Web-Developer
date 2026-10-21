<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Tugas PHP</title>
</head>
<body>

    <h2>Form Input Nilai Ujian</h2>

    <form method="POST" action="">
        <label>Nama:</label><br>
        <input type="text" name="nama" required><br><br>

        <label>Email:</label><br>
        <input type="email" name="email" required><br><br>

        <label>Nilai Ujian:</label><br>
        <input type="number" name="nilai" min="0" max="100" required><br><br>

        <input type="submit" name="proses" value="Proses Nilai">
    </form>

    <hr>

    <?php
    if (isset($_POST['proses'])) {
        $nama  = $_POST['nama'];
        $email = $_POST['email'];
        $nilai = $_POST['nilai'];

        if ($nilai > 70) {
            $status = "Lulus";
        } else {
            $status = "Remedial";
        }
    ?>

        <h3>Hasil Evaluasi:</h3>
        <p>Nama: <?= $nama; ?></p>
        <p>Email: <?= $email; ?></p>
        <p>Nilai Ujian: <?= $nilai; ?></p>
        <p>Status: <strong><?= $status; ?></strong></p>

    <?php
    }
    ?>

</body>
</html>