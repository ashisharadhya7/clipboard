const pythonCodes = {
    button1: `def bit_stuffing(data):
    stuffed_data = ""
    count = 0
    for bit in data:
        if bit == '1':  
            count += 1
            stuffed_data += bit
        else:
            count = 0
            stuffed_data += bit
        if count == 5:  # Fix the condition to check if count is 5
            stuffed_data += '0'  # Insert '0' after five consecutive '1's
            count = 0
    return stuffed_data

def bit_decoding(stuffed_data):
    decoded_data = ""
    count = 0
    for bit in stuffed_data:
        if bit == '1':  # Fix the condition to check for '1'
            count += 1
            decoded_data += bit
        else:
            if count == 5:  # Fix the condition to check if count is 5
                count = 0
                continue
            count = 0
            decoded_data += bit
    return decoded_data

data = input("Enter the data (binary string): ")
stuffed_data = bit_stuffing(data)
print("Data after bit stuffing:", stuffed_data)
decoded_data = bit_decoding(stuffed_data)
print("Data after bit decoding:", decoded_data)`,

    button2: `def sender():
    res = ""
    n = int(input("Enter number of frames: "))
    for i in range(n):
        frame = input(f"Enter frame {i + 1}: ")
        res += f"{len(frame)}{frame}"
    print(f"The final message is: {res}")
    return res

def receiver(res):
    i = 0
    print("Received frames:")
    while i < len(res):
        len_frame = int(res[i])
        i += 1
        print(res[i:i + len_frame])
        i += len_frame

res = sender()
receiver(res)`,

    button3: `RadioGroup r;
ConstraintLayout ly;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        r = findViewById(R.id.rg);
        ly = findViewById(R.id.l);
        r.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(RadioGroup radioGroup, int i) {
                if (i==R.id.red)
                    ly.setBackgroundColor(Color.RED);
                else if (i==R.id.green)
                    ly.setBackgroundColor(Color.GREEN);
                else
                    ly.setBackgroundColor(Color.BLUE);
            }
        });
    }
}

Radio button`,
        
    button4: `TextView t;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.optionsmenu,menu);
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        t = findViewById(R.id.tv);
        int id = item.getItemId();
        if (id == R.id.settings){
            t.setText("Settings selected");
            //Toast.makeText(this, "Settings selected", Toast.LENGTH_SHORT).show();

        } else if (id == R.id.history) {
            //Toast.makeText(this, "History selected", Toast.LENGTH_SHORT).show();
            t.setText("History selected");
        }
        else {
            //Toast.makeText(this, "About selected", Toast.LENGTH_SHORT).show();
            t.setText("About selected");
        }
        return super.onOptionsItemSelected(item);
    }
}

Option menu`,
        
    button5: `ImageView i;
Button b;
int[] images = {R.drawable.elephnant, R.drawable.moon, R.drawable.rose};
int currentIndex = 0;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        i = findViewById(R.id.image);
        b = findViewById(R.id.cb);
        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (currentIndex > 2)
                    currentIndex = 0;
                i.setImageResource(images[currentIndex]);
                currentIndex = currentIndex + 1;
            }
        });
    }
}

Multi image view`,
    
    button6: `EditText p, u, l;
Button c, b, m;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        p = findViewById(R.id.phno);
        u = findViewById(R.id.url);
        l = findViewById(R.id.loc);
        c = findViewById(R.id.call);
        b = findViewById(R.id.browse);
        m = findViewById(R.id.maps);
        c.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String ph = p.getText().toString();
                Intent i = new Intent(Intent.ACTION_CALL, Uri.parse("tel:"+ph));
                startActivity(i);
            }
        });
        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String url = u.getText().toString();
                Intent i = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                startActivity(i);
            }
        });
        m.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String loc = l.getText().toString();
                Intent i = new Intent(Intent.ACTION_VIEW, Uri.parse("google.navigation:q="+loc));
                startActivity(i);
            }
        });
    }
}


Implicit intent
`
    button7: `EditText e1;
Button b1;
TextView t1;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        e1 = findViewById(R.id.msg1);
        b1 = findViewById(R.id.send1);
        t1 = findViewById(R.id.resp1);
        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String m1 = e1.getText().toString();
                Intent i = new Intent(MainActivity.this, secondactivity.class);
                i.putExtra("message1",m1);
                startActivityForResult(i,1);
            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if(requestCode == 1 && resultCode == RESULT_OK){
            String s = data.getStringExtra("message2");
            t1.setText(s);
        }
    }
}

Explicit intent
`


button8: `Log.i("ActivityLc", "onCreate() method");
    }

    @Override
    protected void onStart() {
        super.onStart();
        Log.i("ActivityLc", "onStart() method");
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.i("ActivityLc", "onResume() method");
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.i("ActivityLc", "onPause() method");
    }

    @Override
    protected void onStop() {
        super.onStop();
        Log.i("ActivityLc", "onStop() method");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.i("ActivityLc", "onRestart() method");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.i("ActivityLc", "onDestroy() method");
    }
}

Activity lifecycle
`

button9: `Button b;
    ConstraintLayout ly;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        b = findViewById(R.id.rc);
        ly = findViewById(R.id.l);
        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Random rn = new Random();
                int r = rn.nextInt(256);
                int g = rn.nextInt(256);
                int b = rn.nextInt(256);
                ly.setBackgroundColor(Color.rgb(r,g,b));
            }
        });
    }
}

Button/Myapplication
`
button10: `CheckBox c1, c2, c3, c4 ;
Button b;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
       c1 = findViewById(R.id.burger);
       c2 = findViewById(R.id.pizza);
       c3 = findViewById(R.id.noodles);
       c4 = findViewById(R.id.dosa);
       b = findViewById(R.id.menu);
       b.setOnClickListener(new View.OnClickListener() {
           @Override
           public void onClick(View view) {
               String li = "";
               int amt = 0;
               if (c1.isChecked()) {
                   li = li + c1.getText().toString() + " ";
                   amt = amt + 100;
               }
.
.
.
Toast.makeText(MainActivity.this, li , Toast.LENGTH_SHORT).show();
               Toast.makeText(MainActivity.this, amt +"", Toast.LENGTH_SHORT).show();    

Checkbox
`

button11: `TextView tv;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        tv = findViewById(R.id.t);
        registerForContextMenu(tv);
    }

    @Override
    public void onCreateContextMenu(ContextMenu menu, View v, ContextMenu.ContextMenuInfo menuInfo) {
        super.onCreateContextMenu(menu, v, menuInfo);
        getMenuInflater().inflate(R.menu.optionsmenu, menu);
    }

    @Override
    public boolean onContextItemSelected(@NonNull MenuItem item) {
        if(item.getItemId() == R.id.apple){
            tv.setText("Apple selected");
        } else if (item.getItemId() == R.id.banana) {
            tv.setText("Banana selected");
        }
        else {
            tv.setText("Mango selected");
        }
        return super.onContextItemSelected(item);
    }
}

Context menu
`
button12: `ImageView iv;
    Button b;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        b = findViewById(R.id.capture);
        iv = findViewById(R.id.i);
        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
                startActivityForResult(i,1);
            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == 1 && resultCode == RESULT_OK){
            Bitmap t = (Bitmap) data.getExtras().get("data");
            iv.setImageBitmap(t);
        }
    }
}

Capture image
`

button13: `ImageView i;
Button b;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        i = findViewById(R.id.iv);
        b = findViewById(R.id.ch);
        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                i.setImageResource(R.drawable.image);
            }
        });
    }
}

Imageview
`
button14: `RadioGroup r;
    ConstraintLayout cl;
    Button b;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        r = findViewById(R.id.rg);
        cl = findViewById(R.id.ly);
        b = findViewById(R.id.cb);

        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                int i = r.getCheckedRadioButtonId();
                if (i == R.id.red){
                    cl.setBackgroundColor(Color.RED);
                } else if (i == R.id.blue) {
                    cl.setBackgroundColor(Color.BLUE);
                }
                else {
                    cl.setBackgroundColor(Color.GREEN);
                }
            }
        });
    }
}

Radioand button
`



}
